import { Model, DataTypes, InferAttributes, InferCreationAttributes, ForeignKey } from 'sequelize';
import { Database } from '../db';

export interface INotes {
    NoteId?: string;
    Title: string;
    Description: string;
    IsDone: boolean;
    CreatedAt?: Date;
    UpdatedAt?: Date;
}

class Notes extends Model<InferAttributes<Notes>, InferCreationAttributes<Notes>>{
    declare NoteId: string;
    declare Title: string;
    declare Description: string;
    declare CreatedAt: Date;
    declare UpdatedAt: Date;
    declare IsDone: boolean;
}

Notes.init(
    {
        NoteId: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            validate: {
                isUUID: {
                    args: 4,
                    msg: 'Please, input an UUID value for Note id.'
                }
            }
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please, input a title for note.'
                },
                notEmpty: {
                    msg: 'Please, input a correct title. Make sure that length is no longer than 60 characters.'
                }
            }
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Please, input a correct description. Make sure that length is no longer than 255 characters.'
                },
                notNull: {
                    msg: 'Please, input a description for note.'
                },
            }
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')
        },
        UpdatedAt: {
            type: DataTypes.DATE,
            defaultValue: Database.literal('CURRENT_TIMESTAMP')

        },
        IsDone: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        tableName: 'Notes',
        indexes: [
            {
                unique: true,
                fields: ['NoteId']
            }
        ],
        createdAt: "CreatedAt",
        updatedAt: "UpdatedAt",
        sequelize: Database
    },
);

export default Notes;