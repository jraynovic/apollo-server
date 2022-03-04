export default (sequelize, DataTypes)=>{
  const Links = sequelize.define(
    'Links',{
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      url: {type: DataTypes.STRING},
      slug:{tpye: DataTypes.STRING}
    }
  )
}