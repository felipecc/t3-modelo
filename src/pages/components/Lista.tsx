import { trpc } from '../../utils/trpc';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../server/trpc/router';


function Lista(props: { label: string }) {

    const { data: pacientes } = trpc.pacientes.getAll.useQuery();

    if (pacientes) {
        console.log(pacientes);
    }



    return <h1>{props.label}</h1>;
}

export default Lista;