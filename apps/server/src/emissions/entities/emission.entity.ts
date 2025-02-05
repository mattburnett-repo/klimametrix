import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'

@Entity('emissions')
export class Emission {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('float')
  electricity: number

  @Column('float')
  fuel: number

  @Column('float')
  waste: number

  @Column('float')
  totalEmissions: number

  @CreateDateColumn()
  createdAt: Date

  @Column({ type: 'jsonb', nullable: true })
  metadata: Record<string, any>
} 