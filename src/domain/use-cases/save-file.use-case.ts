import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  destination?: string;
  fuleName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {
    /**
     * repository StorageRepository instance
     */
  }

  execute({
    fileContent,
    destination = `outputs`,
    fuleName = "table",
  }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fuleName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
