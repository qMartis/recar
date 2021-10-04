import { createDatabaseConnection } from '../../lib/typeorm'
import { Part } from '../../entities/Part'
import data from '../fixtures/parts.json'

(async (): Promise<void> => {
	try {
		const connection = await createDatabaseConnection()
		const partRepository = connection.getRepository(Part)

		for (const { id, ...record } of data) {
			const part = partRepository.create(record)
			console.log('Seeding...', id)
			await partRepository.save(part)
		}

		connection.close()
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
})()
