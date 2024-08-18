import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
    return (
        <div className="profile-section">
            <div className="profile-image">
                {/* Add profile image here */}
            </div>
            <div className="profile-details">
                <h4>Profile Name</h4>
                <p>Role: Admin</p>
            </div>
        </div>
    );
};

export default ProfileSection;
