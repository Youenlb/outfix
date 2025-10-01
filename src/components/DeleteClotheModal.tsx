// TS
import type { Clothe } from "../types/Clothe";
import { Dialog, CloseButton, Button } from "@chakra-ui/react";
// TODO : Faire un useModal ou la gestion du cancel est faite au lieu de répéter les actions
type DeleteClotheModalProps = {
  clothe: Clothe;
  onDeleteClick: (clothe: Clothe) => void;
  onCancelClick: () => void;
  isOpen: boolean;
};
// TODO : rendre ce composant plus réutilisable pour pouvoir l'uiliser pour la suppression d'un outfit aussi
const DeleteClotheModal = ({ clothe, isOpen, onDeleteClick, onCancelClick }: DeleteClotheModalProps) => {
  console.log("Function")
  console.log(typeof(onCancelClick))
  return (
    // TODO : Voir ce que signifie onOpenChange
    <Dialog.Root open={isOpen} onOpenChange={(newStateDialog) => !newStateDialog.open && onCancelClick()}>
       <Dialog.Backdrop />
       <Dialog.Positioner className="flex items-center justify-center">
          <Dialog.Content>
            <Dialog.Header>Confirmer la suppression</Dialog.Header>
            <Dialog.Body>
              Êtes-vous sûr de vouloir supprimer ce vêtement ?
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Trigger asChild>
                <Button onClick={() => onCancelClick()} variant="outline">Annuler</Button>
              </Dialog.Trigger>
              <Button colorScheme="red" onClick={() => onDeleteClick(clothe)}>Supprimer</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
       </Dialog.Positioner>
    </Dialog.Root>
  );

};
export default DeleteClotheModal;