import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class GetPrice1624546644586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'GetPrice',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'value',
            type: 'decimal',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('GetPrice');
  }
}
