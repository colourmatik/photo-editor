import { Button} from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import './IconButton.css';

interface IconButtonProps {
  active: boolean;
  component: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps> | undefined;
  onIconButtonClick: () => void;
  title: string;
}

const IconButton = ({
  active,
  component,
  onIconButtonClick,
  title,
}: IconButtonProps) => {
  return (
    <Button
      type={active ? 'primary' : 'default'}
      className={`icon-btn ${active ? 'active' : ''}`}
      onClick={onIconButtonClick}
      title={title}
    >
      <Icon style={{ fontSize: '24px' }} component={component} />
    </Button>
  );
};

export default IconButton;