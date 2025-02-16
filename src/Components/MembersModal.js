import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import "../Design/MembersModal.css";

export const MembersModal = ({ owner, members, onClose, onRemoveMember }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
    
        <div className="modal-header">
          <FaUserEdit className="modal-icon" />
          <h2>Členové</h2>
        </div>

        
        <div className="member-item owner-item">
          <div className="member-info">
            <strong>{owner.name}</strong>
            <span className="member-label">vlastník</span>
          </div>
        </div>

        
        <div className="members-section">
          {members.map((member) => (
            <div key={member.id} className="member-item">
              <div className="member-info">
                <strong>{member.name}</strong>
                <span className="member-label">pozvaný</span>
              </div>
              <CiCircleMinus onClick={() => onRemoveMember(member.id)} className="remove-icon" />
            </div>
          ))}
        </div>

        
        <button onClick={onClose} className="close-button">Zavřít</button>
      </div>
    </div>
  );
};
