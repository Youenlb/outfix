// TS
import type { Clothe } from "../types/Clothe";
import { Dialog, CloseButton, Button } from "@chakra-ui/react";

// TODO : Faire un useModal ou la gestion du cancel est faite au lieu de répéter les actions
type DeleteClotheModalProps = {
  clothe: Clothe | null;
  isOpen: boolean;
  onCancelClick: () => void;
  onDeleteClick: () => void;
};
// TODO : rendre ce composant plus réutilisable pour pouvoir l'uiliser pour la suppression d'un outfit aussi
const DeleteClotheModal = ({ clothe, isOpen, onCancelClick, onDeleteClick }: DeleteClotheModalProps) => {

  return (
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
              <Button colorScheme="red" onClick={() => onDeleteClick()}>Supprimer</Button>
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