import { useNavigate } from 'react-router-dom';
import Button from './Button';

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      Back
    </Button>
  );
}

export default BackButton;
