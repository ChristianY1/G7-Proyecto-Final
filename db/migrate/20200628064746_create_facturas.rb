class CreateFacturas < ActiveRecord::Migration[6.0]
  def change
    create_table :facturas do |t|
      t.integer :id
      t.date :fechaFactura
      t.references :pacientes, null: false, foreign_key: true

      t.timestamps
    end
  end
end
