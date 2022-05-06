import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn()
const sendEmailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendEmailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'data:image/png;base64:1ij5i812htiqfiqu',
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendEmailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'Example comment',
        screenshot: 'data:image/png;base64:1ij5i812htiqfiqu',
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64:1ij5i812htiqfiqu',
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'text.jpg',
      })
    ).rejects.toThrow()
  })
})
