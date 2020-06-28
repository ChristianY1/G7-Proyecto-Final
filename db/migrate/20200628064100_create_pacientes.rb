class CreatePacientes < ActiveRecord::Migration[6.0]
  def change
    create_table :pacientes do |t|
      t.string :cedula
      t.string :nombre
      t.string :apellido
      t.date :fechaDeNacimiento
      t.string :sexo
      t.string :telefono
      t.string :mail
      t.string :password

      t.timestamps
    end
  end
end
