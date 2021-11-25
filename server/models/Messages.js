module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define("Messages", {
        sender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        readStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })

    return Messages
}