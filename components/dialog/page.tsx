// components/dialog/page.js
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RowData {
  field1: string;
  field2: number;
  // add more fields as needed
}

interface DialogDemoProps {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface DialogDemoProps {
  rowData: RowData;
  onSave: (rowData: RowData) => void;
}

export function DialogDemo({ rowData, onSave }: DialogDemoProps) {
  const [editedData, setEditedData] = useState(rowData);

  useEffect(() => {
    setEditedData(rowData);
  }, [rowData]);

  const handleInputChange = (field: keyof RowData, value: string | number) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {Object.entries(editedData).map(([field, value]) => (
            <div key={field} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={field} className="text-right">
                {field}
              </Label>
              <Input
                id={field}
                className="col-span-3"
                value={value}
                onChange={(e) => handleInputChange(field as keyof RowData, e.target.value)}
              />
            </div>
          ))}
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
