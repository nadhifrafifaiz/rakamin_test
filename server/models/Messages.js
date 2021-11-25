module.exports = (sequelize, DataTypes) => {
    const Messages = sequelize.define("Messages", {
        idConversation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sender: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Messages
}