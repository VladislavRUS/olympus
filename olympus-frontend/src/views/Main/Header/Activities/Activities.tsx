import React from 'react';
import { Wrapper } from './Activities.styles';
import { FriendsRequests } from './FriendsRequests';
import { ChatMessages } from './ChatMessages';
import { Notifications } from './Notifications';

const Activities = () => (
  <Wrapper>
    <FriendsRequests />
    <ChatMessages />
    <Notifications />
  </Wrapper>
);

export default Activities;
