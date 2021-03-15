import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

export const cn = withNaming({ e: '__', m: '_', v: '_' });
export const cns = classnames;
