import ButtonDemo from "../reusables/ButtonDemo";

interface DialogProps {
  handleClose: () => void;
  open: boolean;
}

const Dialog = ({ handleClose, open }: DialogProps) => {
  return (
    <dialog
      open={open}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-500 shadow-md rounded-lg p-6 mt-10 md:max-w-md w-full mx-4"
    >
      <div className="text-center flex flex-col gap-4 text-white">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Freelance Services</h2>
        </div>
        <div className="px-6 py-4">
          <h1 className="mb-2 text-lg">
            I provide the following freelance services with competitive charges
          </h1>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>API Data Fetching and Displaying</strong> - Charges: ₹1000
            </li>
            <li>
              <strong>Make RESTful API using MERN</strong> - Charges: ₹2000
            </li>
            <li>
              <strong>UI/UX with Top-notch Animations</strong> - Charges: ₹1500
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <ButtonDemo
          name="Close"
          type="button"
          onClick={handleClose}
          className="py-2 px-4 rounded bg-white text-violet-500"
        />
      </div>
    </dialog>
  );
};

export default Dialog;
