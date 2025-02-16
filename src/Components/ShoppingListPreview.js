
import {AccessTime, PersonAddAlt, Delete, DoDisturb} from "@mui/icons-material";
import "../Design/ShoppingListPreview.css"
import { useNavigate } from "react-router-dom";

const getLabel = (mode, data, role) => {
    if (mode === 1) {
        return 'owned'
    } else if (mode === 2) {
        return  'invited'
    } else {
        return data.owner.name === role ? 'owned - archived' : 'accepted - archived'
    }
}

export const ShoppingListPreview = ({
                                        mode,
                                        preview,
                                        role,
                                        openAddMemberModal,
                                        handleDeleteShoppingList,
                                        handleRemoveMember,
                                        handleToggleArchive}) => {

    const navigate = useNavigate();

    return (
        <article className="shopping-list-preview" onClick = { () => { navigate(`/detail?shoppingListName=${preview.name}`)} }>
            <div>
                <h3>{preview.name}</h3>
                <span>{getLabel(mode, preview, role)}</span>
            </div>
            <section className="control-buttons">
                {(mode === 1 || (mode === 3 && preview.owner.name === role)) && (
                    <>
                        <AccessTime onClick={(event) => {event.stopPropagation(); handleToggleArchive(preview.name)}} />
                        <Delete onClick={(event) => {event.stopPropagation(); handleDeleteShoppingList(preview.name)}} />
                    </>
                )}

                {mode === 1 && (
                    <PersonAddAlt onClick={(event) => {event.stopPropagation(); openAddMemberModal(preview.name)}} />
                )}

                {mode === 2 && <DoDisturb onClick={(event) => {event.stopPropagation(); handleRemoveMember(preview.name, role)}} />}

                {mode === 3 && preview.owner.name !== role && (
                    <DoDisturb onClick={(event) => {event.stopPropagation(); handleRemoveMember(preview.name, role)}} />
                )}

            </section>
        </article>
    )
}