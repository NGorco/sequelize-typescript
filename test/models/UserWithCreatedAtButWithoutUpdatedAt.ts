import {Table, Model, Column} from "../../src";

@Table({
  timestamps: true,
  updatedAt: false
})
export class UserWithCreatedAtButWithoutUpdatedAt extends Model<UserWithCreatedAtButWithoutUpdatedAt> {

  @Column
  name: string;
}
