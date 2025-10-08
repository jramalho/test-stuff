/**
 * Analytics utility for tracking 3D scene performance and interactions
 * This is a placeholder implementation - integrate with your analytics platform
 * (e.g., Google Analytics, Mixpanel, Amplitude, etc.)
 */

export interface PerformanceMetrics {
  fps: number
  quality: 'low' | 'medium' | 'high'
  timestamp: number
}

export interface InteractionEvent {
  type: 'zoom' | 'rotate' | 'pan'
  timestamp: number
}

class Analytics {
  private performanceLog: PerformanceMetrics[] = []
  private interactionLog: InteractionEvent[] = []

  /**
   * Track performance metrics
   */
  trackPerformance(fps: number, quality: 'low' | 'medium' | 'high'): void {
    const metric: PerformanceMetrics = {
      fps,
      quality,
      timestamp: Date.now()
    }
    
    this.performanceLog.push(metric)
    
    // Keep only last 100 entries
    if (this.performanceLog.length > 100) {
      this.performanceLog.shift()
    }

    // In production, send to analytics service
    if (import.meta.env.PROD) {
      this.sendToAnalytics('performance', metric)
    }
  }

  /**
   * Track user interactions with 3D scene
   */
  trackInteraction(type: 'zoom' | 'rotate' | 'pan'): void {
    const event: InteractionEvent = {
      type,
      timestamp: Date.now()
    }
    
    this.interactionLog.push(event)
    
    // Keep only last 50 entries
    if (this.interactionLog.length > 50) {
      this.interactionLog.shift()
    }

    // In production, send to analytics service
    if (import.meta.env.PROD) {
      this.sendToAnalytics('interaction', event)
    }
  }

  /**
   * Get average FPS over the last N entries
   */
  getAverageFPS(entries: number = 10): number {
    const recentMetrics = this.performanceLog.slice(-entries)
    if (recentMetrics.length === 0) return 0
    
    const totalFps = recentMetrics.reduce((sum, m) => sum + m.fps, 0)
    return Math.round(totalFps / recentMetrics.length)
  }

  /**
   * Get current quality distribution
   */
  getQualityDistribution(): { low: number; medium: number; high: number } {
    const distribution = { low: 0, medium: 0, high: 0 }
    
    this.performanceLog.forEach(metric => {
      distribution[metric.quality]++
    })
    
    return distribution
  }

  /**
   * Send data to analytics service
   * Replace this with your actual analytics implementation
   */
  private sendToAnalytics(eventType: string, data: unknown): void {
    // Example: Google Analytics
    // gtag('event', eventType, data)
    
    // Example: Mixpanel
    // mixpanel.track(eventType, data)
    
    // Example: Custom API
    // fetch('/api/analytics', { method: 'POST', body: JSON.stringify({ eventType, data }) })
    
    console.log(`[Analytics] ${eventType}:`, data)
  }

  /**
   * Get all performance logs (for debugging)
   */
  getPerformanceLogs(): PerformanceMetrics[] {
    return [...this.performanceLog]
  }

  /**
   * Get all interaction logs (for debugging)
   */
  getInteractionLogs(): InteractionEvent[] {
    return [...this.interactionLog]
  }
}

// Export singleton instance
export const analytics = new Analytics()

// Make available in browser console for debugging
if (typeof window !== 'undefined') {
  ;(window as any).__3d_analytics__ = analytics
}
