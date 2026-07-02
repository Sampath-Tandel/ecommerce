/*
=========================================================
JWT (JSON Web Token)
=========================================================

What is JWT?
------------
JWT (JSON Web Token) is a secure token used to identify
an authenticated user without storing session data
on the server.

Why do we use JWT?
------------------
- Allows users to log in only once.
- Avoids sending email/password with every request.
- Enables secure communication between frontend and backend.
- Commonly used for authentication in REST APIs.

How does it work?
-----------------
1. User logs in with email and password.
2. Backend verifies the credentials.
3. Backend generates a JWT containing the user's ID.
4. Frontend stores the JWT (usually in localStorage or cookies).
5. For every protected request, the frontend sends:
      Authorization: Bearer <JWT_TOKEN>
6. Backend verifies the token.
7. If the token is valid, the user is authenticated.

Token Structure:
----------------
JWT consists of three parts:
Header.Payload.Signature

Example:
---------
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Important Notes:
----------------
- Never store passwords inside a JWT.
- Keep JWT_SECRET private.
- Always set an expiration time (e.g., 7 days).
- Use HTTPS in production for secure transmission.

In this file:
-------------
This function generates a JWT containing the user's ID,
signed with JWT_SECRET, and sets it to expire in 7 days.
=========================================================
*/
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export default generateToken;

/*
=========================================================
1. Authentication
=========================================================

Definition:
------------
Authentication is the process of verifying the identity of a user.
It answers the question:

    "Who are you?"

Purpose:
--------
- Ensures the user is genuine.
- Verifies credentials such as email and password.
- Grants access only to registered users.

Example:
--------
User enters:
    Email: sampath@gmail.com
    Password: 123456

Backend checks the database.
If credentials match → User is authenticated.

Real-Life Example:
------------------
Logging into your Gmail account using your email and password.

=========================================================
2. Authorization
=========================================================

Definition:
------------
Authorization is the process of determining what an authenticated
user is allowed to access or perform.
It answers the question:

    "What are you allowed to do?"

Purpose:
--------
- Restricts access to protected resources.
- Allows different permissions for different users.

Example:
--------
Admin:
    - Add Product
    - Delete Product
    - Manage Orders

Customer:
    - View Products
    - Add to Cart
    - Place Orders

Real-Life Example:
------------------
After entering an office, only managers can access the manager's room.
Employees cannot.

=========================================================
3. Why do we hash passwords?
=========================================================

Definition:
------------
Hashing converts a plain text password into a secure,
irreversible string using a hashing algorithm (e.g., bcrypt).

Purpose:
--------
- Protects user passwords if the database is compromised.
- Plain passwords are never stored in the database.
- During login, the entered password is hashed and compared
  with the stored hashed password.

Example:
--------

Password:
    123456

Stored in Database:
    $2b$10$7H4FhK7QqW5.....

Real-Life Example:
------------------
Imagine placing your password inside a locked safe.
You can verify that the key fits, but you can never
see the original password again.

Important:
----------
Never store passwords in plain text.

=========================================================
4. Why do we use JWT instead of sending passwords every request?
=========================================================

Problem:
--------
Without JWT, every API request would require:

    Email
    Password

This is insecure and inefficient.

Solution:
---------
After a successful login:

1. User enters email and password.
2. Backend verifies credentials.
3. Backend generates a JWT token.
4. Frontend stores the token.
5. Future requests send only the token.

Example Request:
----------------

Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

Backend verifies the token and identifies the user.

Benefits:
---------
- User logs in only once.
- Password is not sent repeatedly.
- Faster and more secure authentication.
- Stateless authentication (server doesn't store sessions).

Real-Life Example:
------------------
When you enter a movie theater, you buy a ticket once.
After that, you only show the ticket to enter different halls.
You don't buy a new ticket every time.

=========================================================
Quick Summary
=========================================================

Authentication
    -> Who are you?
    -> Verifies identity.

Authorization
    -> What can you do?
    -> Checks permissions.

Hashing
    -> Protects passwords in the database.

JWT
    -> Digital identity card.
    -> Used after login to identify users securely.
=========================================================
*/
