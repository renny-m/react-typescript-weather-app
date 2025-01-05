// Form.tsx

type FormProps = {
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  city: string;
};

const Form = (props: FormProps) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => props.setCity(e.target.value)}
        value={props.city}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
