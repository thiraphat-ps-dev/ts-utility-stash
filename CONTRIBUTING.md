# Contribution Guide

ขอบคุณที่สนใจร่วมพัฒนา ts-utility-stash!

## วิธีการ contribute

- Fork และ clone repository
- สร้าง branch ใหม่จาก main
- เพิ่มหรือแก้ไข utility ใน `src/[module]/`
- เพิ่ม/ปรับ unit test ใน `src/[module]/index.test.ts`
- รัน `npm run lint` และ `npm run test`
- Commit ด้วยข้อความที่สื่อความหมาย (เช่น feat, fix, chore)
- Push branch และสร้าง Pull Request

## Style & Test

- ใช้ TypeScript, รองรับ strict mode
- รัน lint (`npm run lint`) และ format (`npm run format`) ก่อน commit
- เพิ่ม unit test ทุกครั้งที่เพิ่ม utility ใหม่
- ตรวจสอบ coverage ด้วย `npm run test:ci`

## PR Process

- อธิบาย feature/fix ที่เพิ่มใน PR
- รอ review และแก้ไขตาม feedback

## เพิ่ม utility ใหม่

- สร้างไฟล์ในหมวดหมู่ที่เหมาะสม (array, object, string, ...)
- เพิ่ม test case ครอบคลุม edge case
- อัปเดต README.md ถ้ามี API ใหม่

ขอบคุณที่ร่วมพัฒนา!
