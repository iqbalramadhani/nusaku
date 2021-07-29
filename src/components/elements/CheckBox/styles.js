import { grey } from '../../../constants/colors'

const styles = {
  root: {
    color: grey.slate,
    "&$checked": {
      color: grey.slate
    }
  },
  sizeIcon: {
    fontSize: '20px',
  },
  checked: {},
  size: {
    width: 40,
    height: 40
  }
};

export default styles;
