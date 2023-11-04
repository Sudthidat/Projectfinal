module.exports = (sequelize, DataTypes) => {
    const Pastille = sequelize.define('Pastille', {
        Name: DataTypes.STRING,
        Type: DataTypes.STRING,
        Detail: DataTypes.STRING,
        Instruction: DataTypes.STRING,
        Price: DataTypes.INTEGER
    })
    return Pastille
}