import {useRole} from "../Components/RoleContext";
import {ShoppingListPreview} from "../Components/ShoppingListPreview";
import {useState} from "react";
import AddMemberModal from "../Components/AddMemberModal";
import ConfirmationModal from "../Components/ConfirmationModal";
import '../Design/List.css'

export const List = ({mode, shoppingListProp, setShoppingListMock}) => {
    const { role } = useRole();

    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState('')
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState('')

    const handleAddMember = async (nameShoppingList, nameMember) => {
       console.log(nameShoppingList);
       console.log(nameMember);

        return new Promise((resolve) => {
            setTimeout(() => {
                setShoppingListMock((prev) =>
                    prev.map((itm) =>
                        itm.name === nameShoppingList
                            ? { ...itm, members: [...itm.members, { name: nameMember }] }
                            : itm
                    )
                );
                resolve();
            }, 200);
        });
    }

    const handleRemoveMember = async (nameShoppingList, nameMember) => {
        console.log(nameShoppingList);
        console.log(nameMember);
        return new Promise((resolve) => {
            setTimeout(() => {
                setShoppingListMock((prev) =>
                    prev.map((itm) =>
                        itm.name === nameShoppingList
                            ? { ...itm, members: itm.members.filter(member => member.name !== nameMember) }
                            : itm
                    )
                );
                resolve();
            }, 200);
        });
    }

    const handleToggleArchive = async (nameShoppingList) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                setShoppingListMock((prev) =>
                    prev.map((itm) =>
                        itm.name === nameShoppingList
                            ? { ...itm, archived: !itm.archived }
                            : itm
                    )
                );
                resolve();
            }, 200);
        });
    }

    const handleDeleteShoppingList = async (nameShoppingList) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                setShoppingListMock((prev) =>
                    prev.filter((itm) =>
                        itm.name !== nameShoppingList
                    )
                );
                resolve();
            }, 200);
        });
    }


    const shoppingListArray = shoppingListProp.filter(item => {
        if (mode === 1 && !item.archived) {
            return item.owner.name === role
        } else if (mode === 2 && !item.archived) {
            return item.members.some(member => member.name === role);
        } else if (mode === 3) {
            return item.archived && (item.owner.name === role || item.members.some(member => member.name === role));
        }
    });

    console.log(shoppingListArray)

    if (!shoppingListArray || !shoppingListArray.length) return null


    return (
        <section className={'list-of-previews'}>
            {
                shoppingListArray.map((item) => {
                    return <ShoppingListPreview
                        preview={item}
                        key={item.name}
                        mode={mode}
                        role={role}
                        openAddMemberModal={(shoppingListName) => setIsAddMemberModalOpen(shoppingListName)}
                        handleRemoveMember={handleRemoveMember}
                        handleToggleArchive={handleToggleArchive}
                        handleDeleteShoppingList={(shoppingListName) => setIsConfirmModalOpen(shoppingListName)}
                    />
                })
            }
            {
                isAddMemberModalOpen && <AddMemberModal onClose={() => setIsAddMemberModalOpen('')}
                                                        onSubmit={(nameMember, nameShoppingList)=> handleAddMember (nameShoppingList, nameMember)}
                                                        name={isAddMemberModalOpen}
                />
            }
            {
                isConfirmModalOpen && <ConfirmationModal onClose={() => setIsConfirmModalOpen('')}
                                                         onSubmit={() => handleDeleteShoppingList(isConfirmModalOpen) }
                                                         question='Are you sure you want to delete?'
                />
                    }
        </section>

)

}
