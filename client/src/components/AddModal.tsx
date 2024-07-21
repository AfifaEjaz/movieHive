import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import secondApiClient from '../services/second-api-client';
import { CustomMovies } from '../hooks/useCustomMovies';

type formData = {
    title: string,
    overview: string,
    genre: string,
    poster_path: string,
};

interface AddModalProps {
    setAddedMovies: React.Dispatch<React.SetStateAction<CustomMovies[]>>;
}

const AddModal = ({ setAddedMovies }: AddModalProps) => {
    const schema: ZodType<formData> = z.object({
        title: z.string().min(3).max(50),
        overview: z.string().min(10).max(500),
        genre: z.string().min(3).max(30),
        poster_path: z.string().url(),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({ resolver: zodResolver(schema) });

    const submitData = (data: formData) => {
        console.log("its working", data);
        secondApiClient.post("/addmovie", data)
            .then((res) => {
                setAddedMovies(res.data.result);
                console.log(res.data.result);
                reset();
            }).catch((error) => {
                console.log(error.message);
            });
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Add</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Movie</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(submitData)}>
                            <FormControl isInvalid={!!errors.title}>
                                <FormLabel>Title</FormLabel>
                                <Input type='text' {...register("title")} />
                                {errors.title && <p>{errors.title.message}</p>}
                            </FormControl>
                            <FormControl isInvalid={!!errors.overview}>
                                <FormLabel>Overview</FormLabel>
                                <Input type='text' {...register("overview")} />
                                {errors.overview && <p>{errors.overview.message}</p>}
                            </FormControl>
                            <FormControl isInvalid={!!errors.genre}>
                                <FormLabel>Genre</FormLabel>
                                <Input type='text' {...register("genre")} />
                                {errors.genre && <p>{errors.genre.message}</p>}
                            </FormControl>
                            <FormControl isInvalid={!!errors.poster_path}>
                                <FormLabel>Poster Image URL</FormLabel>
                                <Input type='text' {...register("poster_path")} />
                                {errors.poster_path && <p>{errors.poster_path.message}</p>}
                            </FormControl>
                            <Button mt={3} type="submit">
                                Submit
                            </Button>
                        </form>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    );
}

export default AddModal;
