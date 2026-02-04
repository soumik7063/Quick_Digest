"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteSummary } from "@/actions/summary-action";
import { useRouter } from "next/navigation";
interface DeleteComponentProps {
  summaryId: string;
}
const Deletebutton = ({ summaryId }: DeleteComponentProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteSummary(summaryId);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="destructive" className="bg-rose-400">
          <Trash2 className="" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely want to delete?</DialogTitle>
          <DialogDescription>
            This will permanently delete your summary and remove your data from
            our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            className="bg-gray-500 hover:bg-gray-600"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            className="bg-rose-400 hover:bg-rose-500"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Deletebutton;
