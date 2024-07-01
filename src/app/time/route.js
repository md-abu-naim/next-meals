// export const dynamic = 'force-dynamic'
export async function Get() {
    return Response.json({
        currentTime: new Date().toLocaleTimeString()
    })
}