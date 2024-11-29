
import React from "react";


const Delete = () => {



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        padding: "0px 20px 0px 20px",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#007bff",
          color: "white",
          width: "100%",
          padding: "10px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Bashu</h1>
      </nav>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Hi, welcome!</h1>
        <p>See instructions below on how to delete your account.</p>
        <h2>Delete Your Account on Bashu App</h2>
        <p>Follow these steps to delete your account:</p>
        <ol style={{ textAlign: "left", maxWidth: "600px" }}>
          <li>
            If you are not logged in, log in with your credentials, then navigate to your profile page.
          </li>
          <li>
            Under the <strong>Logout</strong> button, you will see a <strong>Delete Account</strong> button.
          </li>
          <li>
            When pressed, you will be presented with a dialog to confirm whether you really want to delete your account.
          </li>
          <li>
            Press <strong>Delete Account</strong> to delete the account, or press <strong>Cancel</strong> to cancel.
          </li>
          <li>
            Note: You can recover your account within 30 days. After that, your account will be permanently deleted.
          </li>
        </ol>
        {/* <button
          onClick={handleDeleteClick}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Delete Account
        </button> */}
      </div>

      {/* Dialog */}
      {/* {showDialog && (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              zIndex: 1000,
            }}
          >
            <h2>Confirm Deletion</h2>
            <p>
              Are you sure you want to delete your account? This action can be reversed within 30 days.
            </p>
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={handleConfirmDelete}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Delete Account
              </button>
              <button
                onClick={handleCancel}
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={handleCancel}
          />
        </>
      )} */}

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#f8f9fa",
          color: "#6c757d",
          textAlign: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <p>Thank you, Bashu Team</p>
        <p>© Bashu Technologies</p>
      </footer>
    </div>
  );
};



export default Delete;
