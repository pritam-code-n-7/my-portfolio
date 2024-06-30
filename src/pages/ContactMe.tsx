import { FormEvent, useState, useEffect } from "react";
import InputField from "../reusables/InputField";
import ButtonDemo from "../reusables/ButtonDemo";

interface FormData {
  name: string;
  email: string;
  brief: string;
  timestamp: number;
}

const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const fetchStoredData = (): FormData[] => {
  const storedData = localStorage.getItem("contactData");
  if (!storedData) return [];

  try {
    const data: FormData[] = JSON.parse(storedData);
    const currentTime = Date.now();

    // Filter out expired data
    return data.filter(
      (item) => currentTime - item.timestamp < EXPIRATION_TIME
    );
  } catch (error) {
    console.error("Error parsing stored data:", error);
    return [];
  }
};

const storeData = (data: FormData[]) => {
  localStorage.setItem("contactData", JSON.stringify(data));
};

const ContactMe: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [brief, setBrief] = useState<string>("");
  const [data, setData] = useState<FormData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedData = fetchStoredData();
    setData(storedData);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //validation for correct name formatting
    const formattedName = name
      .split(" ")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
      .join(" ");
    if (name !== formattedName) {
      setError("Name should be properly formatted (e.g., John Doe).");
      return;
    }
    const newItem: FormData = { name, email, brief, timestamp: Date.now() };
    const updatedData = [...data, newItem];

    storeData(updatedData);
    setData(updatedData);
    setError(null);

    setName("");
    setEmail("");
    setBrief("");
  };

  const handleDelete = (index: number) => {
    const updatedData = data.filter((_, i) => i !== index);

    storeData(updatedData);
    setData(updatedData);
  };

  return (
    <div className="min-h-screen">
      <div className="border-b-2 border-gray-500 mt-6">
        <p className="text-violet-500 text-xl mb-2">Put Your Enquiry</p>
      </div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-2 mt-2">
        <InputField
          label="Name:"
          htmlFor="name"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full py-2 bg-neutral-800 focus:ring focus:ring-amber-500 rounded border border-gray-500"
        />
        {error && <div className="text-red-500">{error}</div>}
        <InputField
          label="Email ID:"
          htmlFor="email"
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full py-2 bg-neutral-800 focus:ring focus:ring-amber-500 rounded border border-gray-500"
        />
        <InputField
          label="Brief:"
          htmlFor="brief"
          id="brief"
          type="text"
          value={brief}
          onChange={(event) => setBrief(event.target.value)}
          className="w-full py-6 bg-neutral-800 focus:ring focus:ring-amber-500 rounded border border-gray-500"
        />
        <div className="flex justify-center mt-6">
          <ButtonDemo
            name="Send"
            type="submit"
            className="py-2 px-4 bg-violet-500 rounded"
          />
        </div>
      </form>
      <div className="flex flex-col gap-2 mt-2">
        {data.map((item, index) => (
          <div key={index} className="container mx-auto ">
            <div className="mx-auto max-w-full p-4 text-center flex flex-col border-2 border-violet-500">
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-blue-500 underline">{item.email}</p>
              <p className="text-balance text-xs">{item.brief}</p>
              <ButtonDemo
                name="Close"
                type="button"
                onClick={() => handleDelete(index)}
                className="py-2 px-4 bg-amber-500 rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
