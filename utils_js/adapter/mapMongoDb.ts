export function mapMongoData<T extends { _id: any }>(data: T): Omit<T, "_id"> & { id: string } {
    const { _id, ...rest } = data;
    return { ...rest, id: _id.toString() };
}

export function mapMongoDataArray<T extends { _id: any }>(data: T[]): (Omit<T, "_id"> & { id: string })[] {
    return data.map(item => {
        const { _id, ...rest } = item;
        return { ...rest, id: _id.toString() };
    });
}
