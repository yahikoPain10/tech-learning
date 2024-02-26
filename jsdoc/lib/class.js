/**
 * Written by ChatGPT.
 * Represents a user.
 * Visit [ChatGPT](https://chat.openai.com/)
 * @class
 * @see visit {@link https://chat.openai.com/ | ChatGPT}
 */
class User {
  /**
   * Create a user.
   * @constructor
   * @param {string} username - The username of the user.
   * @param {string} email - The email of the user.
   */
  constructor(username, email) {
    /**
     * The username of the user.
     * @type {string}
     */
    this.username = username;

    /**
     * The email of the user.
     * @type {string}
     */
    this.email = email;
  }

  /**
   * Get the username of the user.
   * @returns {string} The username.
   */
  getUsername() {
    return this.username;
  }

  /**
   * Get the email of the user.
   * @returns {string} The email.
   */
  getEmail() {
    return this.email;
  }
}

/**
 * Represents an admin user.
 * @class
 * @extends User
 */
class Admin extends User {
  /**
   * Create an admin user.
   * @constructor
   * @param {string} username - The username of the admin.
   * @param {string} email - The email of the admin.
   * @param {string} role - The role of the admin.
   */
  constructor(username, email, role) {
    super(username, email);

    /**
     * The role of the admin.
     * @type {string}
     */
    this.role = role;
  }

  /**
   * Get the role of the admin.
   * @returns {string} The role.
   */
  getRole() {
    return this.role;
  }

  /**
   * Override the base class method to demonstrate method overriding.
   * Get the username of the admin.
   * @returns {string} The username.
   * @override
   */
  getUsername() {
    // Here we are overriding the base class method to add "Admin" prefix.
    return `Admin: ${this.username}`;
  }
}