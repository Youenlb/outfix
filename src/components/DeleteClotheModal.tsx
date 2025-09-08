// TS
import type { Clothe } from "../types/Clothe";
type DeleteClotheModalProps = {
  clothe: Clothe;
  onDeleteClick: (clothe: Clothe) => void;
  onCancelClick: () => void;
};
// TODO : rendre ce composant plus réutilisable pour pouvoir l'uiliser pour la suppression d'un outfit aussi
const DeleteClotheModal = ({ clothe, onDeleteClick, onCancelClick }: DeleteClotheModalProps) => {
  return (
    <div>
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
            Confirmer la suppression
        </h3>
        <p className="text-gray-600 mb-6">
            Êtes-vous sûr de vouloir supprimer "{clothe?.name}" ? Cette
            action est irréversible.
        </p>
        <div className="flex gap-3">
            <button
            onClick={() => onDeleteClick(clothe)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
            Supprimer
            </button>
            <button
            onClick={() => onCancelClick()}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg transition-colors"
            >
            Annuler
            </button>
        </div>
        </div>
    </div>
  );
};
export default DeleteClotheModal;
