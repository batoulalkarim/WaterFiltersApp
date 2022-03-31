class CreateOrganizations < ActiveRecord::Migration[6.1]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :location
      t.string :missionstatement
      t.string :representative
    end
  end
end
