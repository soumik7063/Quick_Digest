import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: { maxFileSize: "32MB" },
  })
    .middleware(async () => {
      const user = await currentUser();

      if (!user) {
        throw new UploadThingError("Unauthorized");
      }

      return {
        userId: user.id,
      };
    })
    .onUploadComplete(
      async ({
        metadata,
        file,
      }: {
        metadata: { userId: string };
        file: {
          name: string;
          size: number;
          key: string;
          url: string;
          ufsUrl: string;
          type: string;
        };
      }) => {
        return {
          userId: metadata.userId,
          file,
        };
      },
    ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
