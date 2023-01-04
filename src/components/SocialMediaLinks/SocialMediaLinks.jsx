import { TbBrandTelegram } from 'react-icons/tb';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import {
  SocialMediaLinkListItem,
  SocialMediaLink,
} from './SocialMediaLinks.styled';

export const SocialMediaLinks = ({ location }) => {
  return (
    <>
      <SocialMediaLinkListItem location={location}>
        <SocialMediaLink href="#" location={location}>
          {location === 'footer' && <span>Telegram</span>}
          <TbBrandTelegram />
        </SocialMediaLink>
      </SocialMediaLinkListItem>

      <SocialMediaLinkListItem location={location}>
        <SocialMediaLink href="#" location={location}>
          {location === 'footer' && <span>Facebook</span>}
          <RiFacebookBoxLine />
        </SocialMediaLink>
      </SocialMediaLinkListItem>

      <SocialMediaLinkListItem location={location}>
        <SocialMediaLink href="#" location={location}>
          {location === 'footer' && <span>Instagram</span>}
          <FiInstagram />
        </SocialMediaLink>
      </SocialMediaLinkListItem>
    </>
  );
};
