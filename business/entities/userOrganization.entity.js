class UserOrganizationEntity {
  constructor({ user_id, organization_id, role, position }) {
    this.user_id = user_id;
    this.organization_id = organization_id;
    this.role = role;
    this.position = position;
  }
}

module.exports = UserOrganizationEntity;
