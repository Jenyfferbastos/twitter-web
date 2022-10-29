import './style.css';

export interface ButtonPrimaryMediumProps {
  text: string;
}
export function ButtonPrimaryMedium({ text }: ButtonPrimaryMediumProps) {
  return (
    <>
      <button className='buttonMedium'>{text}</button>
    </>
  );
}