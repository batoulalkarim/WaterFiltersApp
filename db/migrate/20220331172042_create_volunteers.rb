class CreateVolunteers < ActiveRecord::Migration[6.1]
  def change
    create_table :volunteers do |t|
      t.string :name
      t.string :age
    end
  end
end
