import {unlink} from 'fs/promises'

export async function removeFile(path){
    try {
        await unlink(path)
    } catch {
        console.log('Error while removing files', e.message);
    }
}