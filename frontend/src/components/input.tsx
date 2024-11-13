interface InputProps {
    label: string;
    value?: string; // Make value optional
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Define the onChange type
    type?: string; // Allow specifying input type (default is text)
  }
  
  export const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text" }) => {
    return (
      <div>
        <input
          type={type}
          value={value} // Bind value to the input
          onChange={onChange} // Bind onChange to handle input changes
          placeholder={label}
          className="w-full p-2 border-slate-600 border-2 rounded-lg"
        />
      </div>
    );
  };
  