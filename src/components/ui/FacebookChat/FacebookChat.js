'use client'
import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const FacebookChat = () => {
    return (
        <div>
            <FacebookProvider appId="1807988169683283" chatSupport>
                <CustomChat pageId="104235124306928" minimized={false} />
            </FacebookProvider>
        </div>
    );
};

export default FacebookChat;