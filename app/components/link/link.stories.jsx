import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://omw.com">Primary link</Link>
    <Link secondary href="https://omw.com">
      Secondary link
    </Link>
  </StoryContainer>
);
