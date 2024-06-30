import { useState } from "react";
import ButtonDemo from "../reusables/ButtonDemo";
import Dialog from "./Dialog";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  // handle dialog open and close
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <div className="flex justify-between w-full">
      <div className="py-10 container mx-auto ">
        <div className="flex max-w-lg border border-violet-500 p-6 mx-auto rounded-md shadow justify-center">
          <p className="text-3xl font-[roboto] text-amber-500 ">
            Welcome to my Portfolio
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <ButtonDemo
            name="View Freelance Services"
            type="button"
            className="py-6 px-2 rounded-md bg-amber-500 text-white flex"
            onClick={handleOpen}
          />
        </div>
        <div className="">
        <Dialog open={dialogOpen} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
