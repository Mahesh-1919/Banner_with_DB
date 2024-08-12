import React, { useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";

export default function ProductDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImageUrl] = useState("");

  const handleOpen = () => setOpen(!open);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newBanner = {
      title,
      price,
      image,
    };
    console.log(newBanner);

    await fetch(`http://localhost:3000/api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBanner),
    });

    setTitle("");
    setPrice("");
    setImageUrl("");
    setOpen(!open);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="bg-blue-600 text-white px-4"
      >
        Add Product
      </Button>

      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="p-4  max-w-md mx-auto  my-6"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Banner
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Title
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Title"
              name="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Price
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Price"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 text-left font-medium"
            >
              Link
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="ImageUrl"
              name="ImageUrl"
              value={image}
              onChange={(e) => setImageUrl(e.target.value)}
              className="placeholder:opacity-100 focus:!border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button className="ml-auto bg-black px-4" onClick={submitHandler}>
            Add Product
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
