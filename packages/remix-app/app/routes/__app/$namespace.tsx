import { ActionFunction, LoaderFunction, useCatch  } from 'remix';
import type { LoaderContext } from "types";
import { json, redirect } from 'remix';
import FullPhotoCard from '../../../../ui/kit/components/pagesection/profile/FullPhotoCard';
import  DraggingState  from '../../../../ui/dragable';

export let loader: LoaderFunction = async({params, request, context}) => { 
 let contextual = context as unknown as LoaderContext;
  return null
}


export default function () {

  return (
<>
  
      <DraggingState><FullPhotoCard /></DraggingState>
      <DraggingState><FullPhotoCard /></DraggingState>
      <DraggingState><FullPhotoCard /></DraggingState>
</>
  );
}
// export function CatchBoundary() {
//   let caught = useCatch();

//  switch (caught.status) {
// case 401:
//  case 403:
//     case 404:
//       return (
// <></>
// );
// }
// throw new Error(`Unexpected caught response with status: ${caught.status}`);
// }

// export function ErrorBoundary({ error }: { error: Error }) {
//  console.error(error);
// return (
//   <ErrPage error={error} />
// );
// }