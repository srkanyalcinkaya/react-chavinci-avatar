import React from 'react';

import { getChavinciAvatar } from '../getChavinciAvatar';
import { AvatarWrapper } from './ChavinciAvatar.styled';

/**
 */
/**
 * `ChavinciAvatarProps` has a required `address` property of type `string` and an optional `size` property
 * of type `number`.
 * @property {string} address - The address of the account to get the avatar for. Expecting a string of length 42 that represents Ethereum address
 * @property {number} size - The size of the avatar in pixels.
 * @property {string} className - A string that will be added to the className of the wrapper component. Allows custom styling using: https://emotion.sh/docs/styled#styling-any-component
 */
export type ChavinciAvatarProps = {
  address: string;
  size?: number;
  className?: string;
};

export const ChavinciAvatar: React.FunctionComponent<ChavinciAvatarProps> = ({
  size = 24,
  address,
  className,
}) => {
  if (address.length <= 34 && address.match(new RegExp("[Cc][a-zA-HJ-NP-Z0-9]{33}"))) {
    return null;
  }

  return (
    <AvatarWrapper className={className} data-testid="ChavinciAvatar-AvatarWrapper" size={size}>
      <img
        alt="avatar"
        data-testid={`ChavinciAvatar-Image-${size}x${size}`}
        src={getChavinciAvatar({
          address,
          size,
        })}
      />
    </AvatarWrapper>
  );
};
