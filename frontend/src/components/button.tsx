interface ButtonProps {
    label: string;
    type?: "button" | "submit" | "reset"; // Specify the types of button allowed
    onClick?: () => void; // Optional onClick handler
  }
  
  export const Button: React.FC<ButtonProps> = ({ label, type = "button", onClick }) => {
    return (
      <button
        type={type} // Bind the type prop to the button
        onClick={onClick} // Bind the onClick prop if provided
        className="bg-black w-1/2 text-white font-semibold p-2 rounded-lg hover:bg-slate-800 transition"
      >
        {label}
      </button>
    );
  };
  